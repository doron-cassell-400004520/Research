class UsersController < ApplicationController
	before_action :set_user, only: [:show, :edit, :update, :destroy, :reset_password, :activate_account, 
                                  :deactivate_account, :unlock_account, :update_password]

	def index
		@users = User.all
	end


	def new
		@user = User.new
	end

	def edit

	end
		
	def update
		if @user.update(user_params)
			flash[:notice] = "Your account information was successfully updated"
			redirect_to @user
		else
			render 'edit'
		end
	end

	def create
		@user = User.new(user_params)
    	@user.password = User::DEFAULT_PASSWORD
    	@user.account_status = 0
		@user.username = @user.last_name + @user.first_name[0,1]
		if @user.save
			flash[:notice] = "User #{@user.username}, has succesfully been made"
			redirect_to users_path
		else
			render 'new'
		end
	end

	def destroy
		@user.destroy
		session[:user_id] = nil if @user == current_user
		flash[:notice] = "Account has been succesfully deleted"
		if @user != current_user
			redirect_to users_path
		else
			redirect_to root_path
		end
	end

	def update_password
    if params[:user].present? 
      if @user.update(user_params)
        @user.update(password_reset: false, password_updated: true)
        bypass_sign_in(@user)
        redirect_to root_url, notice: "Password updated successfully"
      end
    end
  end

  def reset_password
    @user.update(password: User::DEFAULT_PASSWORD, password_reset: true)
    flash[:notice] = "Password reset"
    redirect_to users_path
  end

  def activate_account
    @user.activate
    @user.update(password: User::DEFAULT_PASSWORD, password_update_required: true)
    send_credentials(@user)
    respond_to do |format|
      format.html { redirect_to users_path, success: "User's account was activated, they may now sign in" }
      format.json { head :no_content }
    end
  end

  def deactivate_account
    @user.deactivate
    respond_to do |format|
      format.html { redirect_to users_path, alert: "User's account was deactivated, they may now can no longer have access to the system" }
      format.json { head :no_content }
    end
  end

  def unlock_account
    @user.unlock_access!
    @user.update(password: User::DEFAULT_PASSWORD)
    redirect_to users_path, success: "User's account was successfully unlocked, they may now sign in"
  end
	private
	def user_params
		params.require(:user).permit(:first_name, :middle_name, :last_name, :username, :email, :role, :password)
	end

	def set_user
		@user  = User.find(params[:id])
	end
end
