class MoviesController < ApplicationController
    skip_before_action :authorize, only: [:show, :index]

    def index
        movies = Movie.all 
        render json: movies, status: :ok
    end


end
