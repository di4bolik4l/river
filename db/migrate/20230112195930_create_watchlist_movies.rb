class CreateWatchlistMovies < ActiveRecord::Migration[6.1]
  def change
    create_table :watchlist_movies do |t|
      t.belongs_to :watchlist, null: false, foreign_key: true
      t.belongs_to :movie, null: false, foreign_key: true
      t.timestamps
    end
  end
end
