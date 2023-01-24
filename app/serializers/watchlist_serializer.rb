class WatchlistSerializer < ActiveModel::Serializer
  attributes :id, :movies, :animes, :tv_shows
  has_one :user
end
