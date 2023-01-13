class CreateMovies < ActiveRecord::Migration[6.1]
  def change
    create_table :movies do |t|
      t.string :title
      t.string :img_url
      t.string :genre
      t.string :description
      t.string :director
      t.string :cast
      t.string :cast_member_1
      t.string :cast_member_2
      t.string :cast_member_3
      
      t.timestamps
    end
  end
end
