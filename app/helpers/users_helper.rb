module UsersHelper
	def full_name(user)
		"#{user.first_name} #{user.last_name}"		
	end

	def editor?
		current_user and current_user.editor?
	end

	def admin?
		current_user and current_user.admin?
	end

	def only_admins
		redirect_to root_path, alert: @not_allowed_message if !admin? 
	end

	def only_admins_or_editors
		 redirect_to root_path, alert: @not_allowed_message if !admin? and !editor?
	end
end