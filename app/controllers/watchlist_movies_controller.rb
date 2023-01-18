class WatchlistMoviesController < ApplicationController

    def index
        authorize
        current_users_movies = @current_user.watchlist.watchlist_movies
        render json: current_users_movies, status: :ok
    end


end
