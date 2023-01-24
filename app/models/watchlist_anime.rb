class WatchlistAnime < ApplicationRecord
    belongs_to :watchlist
    belongs_to :anime

    validates :watchlist_id, uniqueness: {scope: :anime_id}
end
