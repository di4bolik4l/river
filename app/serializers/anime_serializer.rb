class AnimeSerializer < ActiveModel::Serializer
  attributes :id, :title, :img_url, :description, :netflix, :prime, :hulu, :crunchyroll
  
end
