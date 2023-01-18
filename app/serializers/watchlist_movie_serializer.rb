class WatchlistMovieSerializer < ActiveModel::Serializer
  attributes :id
  has_one :movie
end
