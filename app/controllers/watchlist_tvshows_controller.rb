class WatchlistTvshowsController < ApplicationController

    def index
        authorize
        current_users_tvshows = @current_user.watchlist.watchlist_tvshows
        render json: current_users_tvshows, status: :ok
    end

    def destroy
        watchlist_tvshow = WatchlistTvshow.find_by(id: params[:id])
        if watchlist_tvshow
            watchlist_tvshow.destroy
            head :no_content
        else
            render json: { error: "TV show not on watchlist"}, status: :not_found
        end
    end

    def create
        authorize
        current_user_watchlist = @current_user.watchlist
        params[:watchlist_id] = current_user_watchlist.id
        watchlist_tvshow = WatchlistTvshow.create(watchlist_tvshow_params)
        if watchcdlist_tvshow.valid?
            render json: watchlist_tvshow, status: :created
        else
            render json: { error: watchlist_tvshow.errors.full_messages}, status: :unprocessable_entity
        end
    end

    private

    def watchlist_tvshow_params
        params.permit(:watchlist_id, :tv_show_id)
    end
    
end
