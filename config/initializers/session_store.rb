# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_RadarVirtuel_session',
  :secret      => 'c571d864d03025a511f676ed29f0191ff5710a388ef0cde80d7d3b8a94929d2ead1fc512903545ecaae2ab3b5888b2ab057f036e6cc305bca3269107e80eac3d'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
