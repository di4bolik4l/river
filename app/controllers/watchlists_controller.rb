class WatchlistsController < ApplicationController

    def index
        watchlists = Watchlist.all 
        render json: watchlists, status: :ok
    end

end
