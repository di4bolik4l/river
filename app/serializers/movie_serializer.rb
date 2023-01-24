class MovieSerializer < ActiveModel::Serializer
  attributes :id, :title, :img_url, :genre, :description, :director, :cast_member_1, :cast_member_2, :cast_member_3, :netflix, :prime, :hulu, :crunchyroll
end
