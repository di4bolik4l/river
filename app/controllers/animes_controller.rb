class AnimesController < ApplicationController
    skip_before_action :authorize, only: [:show, :index]

    def index
        animes = Anime.all 
        render json: animes, status: :ok
    end

    def show 
        anime = Anime.find_by(id: params[:id])
        if anime
            render json: anime
        else
            render json: { error: "Anime not found" }, status: :not_found
        end
    end
    
end
