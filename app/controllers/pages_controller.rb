class PagesController < ApplicationController
  before_action :set_page, only: %i[ show edit update destroy ]
  
  # GET /pages or /pages.json
  def index
    @page = Page.new
    @page.request = 1
  end

  def result
    
  end
  private
    # Use callbacks to share common setup or constraints between actions.
      
    def set_page
      @page = Page.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def page_params  
      params.require(:page).permit(:question).to_h  
    end
end
