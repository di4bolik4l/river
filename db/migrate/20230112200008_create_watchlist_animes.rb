class CreateWatchlistAnimes < ActiveRecord::Migration[6.1]
  def change
    create_table :watchlist_animes do |t|
      t.belongs_to :watchlist, null: false, foreign_key: true
      t.belongs_to :anime, null: false, foreign_key: true
      t.timestamps
    end
  end
end
