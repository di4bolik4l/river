class TvShowsController < ApplicationController
    skip_before_action :authorize, only: [:show, :index]

    def index
        tv_shows = TvShow.all 
        render json: tv_shows, status: :ok
    end

    def show 
        tv_show = TvShow.find_by(id: params[:id])
        if tv_show
            render json: tv_show
        else
            render json: { error: "Anime not found" }, status: :not_found
        end
    end
    
end
