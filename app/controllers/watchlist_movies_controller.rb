class WatchlistMoviesController < ApplicationController

    def index
        authorize
        current_users_movies = @current_user.watchlist.watchlist_movies
        render json: current_users_movies, status: :ok
    end

    def destroy
        watchlist_movie = WatchlistMovie.find_by(id: params[:id])
        if watchlist_movie
            watchlist_movie.destroy
            head :no_content
        else
            render json: { error: "Movie not on watchlist"}, status: :not_found
        end
    end

    def create
        authorize
        current_user_watchlist = @current_user.watchlist
        params[:watchlist_id] = current_user_watchlist.id
        watchlist_movie = WatchlistMovie.create(watchlist_movie_params)
        if watchlist_movie.valid?
            render json: watchlist_movie, status: :created
        else
            render json: { error: watchlist_movie.errors.full_messages}, status: :unprocessable_entity
        end
    end

    private

    def watchlist_movie_params
        params.permit(:watchlist_id, :movie_id)
    end
end
