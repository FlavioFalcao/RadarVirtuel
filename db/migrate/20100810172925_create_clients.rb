class CreateClients < ActiveRecord::Migration
  def self.up
    create_table :clients do |t|
      t.string :name
      t.string :url
      t.string :phone_number
      t.decimal :latitude
      t.decimal :longitude
      t.text :embedded_media
      t.string :attachment_file_name
      t.string :attachment_content_type
      t.integer :attachment_file_size
      t.datetime :attachment_updated_at
      
      t.timestamps
    end
  end

  def self.down
    drop_table :clients
  end
end
