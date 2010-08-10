module ClientsHelper
  def gmaps_initialize
    if params[:controller] == "clients"
      case params[:action].to_sym
      when :new
        "initialize();"
      when :edit
        "initialize_with_latlng(#{@client.latitude}, #{@client.longitude})"
      end
    end
  end
    
end
