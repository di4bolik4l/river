class WatchlistAnime < ApplicationRecord
    belongs_to :watchlist
    belongs_to :anime
end
