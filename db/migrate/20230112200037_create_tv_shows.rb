class CreateTvShows < ActiveRecord::Migration[6.1]
  def change
    create_table :tv_shows do |t|
      t.string :title
      t.string :img_url
      t.string :genre
      t.string :description
      t.string :cast
      t.string :cast_member_1
      t.string :cast_member_2
      t.string :cast_member_3
      t.string :netflix
      t.string :prime
      t.string :hulu
      t.string :crunchyroll
      
      t.timestamps
    end
  end
end
