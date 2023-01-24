class WatchlistAnimesController < ApplicationController

    def index
        authorize
        current_users_animes = @current_user.watchlist.watchlist_animes
        render json: current_users_animes, status: :ok
    end

    def destroy
        watchlist_anime = WatchlistAnime.find_by(id: params[:id])
        if watchlist_anime
            watchlist_anime.destroy
            head :no_content
        else
            render json: { error: "Anime not on watchlist"}, status: :not_found
        end
    end

    def create
        authorize
        current_user_watchlist = @current_user.watchlist
        params[:watchlist_id] = current_user_watchlist.id
        watchlist_anime = WatchlistAnime.create(watchlist_anime_params)
        if watchcdlist_anime.valid?
            render json: watchlist_anime, status: :created
        else
            render json: { error: watchlist_anime.errors.full_messages}, status: :unprocessable_entity
        end
    end

    private

    def watchlist_anime_params
        params.permit(:watchlist_id, :anime_id)
    end
    
end
