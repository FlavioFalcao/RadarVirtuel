module ClientsHelper
  def is_add_client?
    params[:controller] == "clients" && [:new, :edit].include?(params[:action].to_sym)
  end
  
end
