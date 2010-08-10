class CreateClients < ActiveRecord::Migration
  def self.up
    create_table :clients do |t|
      t.string :name
      t.string :url
      t.string :phone_number
      t.decimal :latitude
      t.decimal :longitude
      t.text :media

      t.timestamps
    end
  end

  def self.down
    drop_table :clients
  end
end
