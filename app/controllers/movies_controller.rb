class MoviesController < ApplicationController
    skip_before_action :authorize, only: [:show, :index]

    def index
        movies = Movie.all 
        render json: movies, status: :ok
    end

    def show 
        movie = Movie.find_by(id: params[:id])
        if movie
            render json: movie
        else
            render json: { error: "Movie not found" }, status: :not_found
        end
    end
    
end
