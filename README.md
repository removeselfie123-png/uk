# UNITED KERALAM

1. `createdb united_keralam`
- Tournament Champions: new database gets them from `schema.sql`; an existing database needs `psql $DATABASE_URL -f migration_champions.sql` once.
- Awards + Results & fixtures: new database gets them from `schema.sql`; an existing database needs `psql $DATABASE_URL -f migration_awards_fixtures.sql` once. Footer / social links are saved in the `settings` table (no extra step).
- Team rankings: new database gets it from `schema.sql`; an existing database just needs `psql $DATABASE_URL -f migration_team_rankings.sql` once.
2. New database: `psql $DATABASE_URL -f schema.sql`  |  Existing database: `psql $DATABASE_URL -f migration.sql` (run it once; it keeps your data, gives every player a unique ID like UKP0001, moves stats to per-team rows and creates the news table)
3. Copy `.env.example` to `.env` and fill it in (JWT_SECRET is required)
4. Put `index.html` inside a folder named `public/` next to `server.js`
5. `npm install` then `npm start` and open http://localhost:3000
6. Sign up with the ADMIN_IDENT email/mobile, then Menu > Settings > Edit mode to add, edit and delete.

Existing accounts keep working with their old password. If you only want to test the OTP flow locally, set `OTP_DEV=true` and read the code in the server console.

Opening `index.html` without the server runs a local-only demo (localStorage, admin PIN 2026). Demo accounts are not secure; use the server for real users.

## Mobile OTP (SMS)
Set `SMS_PROVIDER` in `.env` to `msg91`, `2factor`, `fast2sms` or `twilio` and fill that provider's keys (see `.env.example`). Indian SMS providers usually need DLT registration / an approved OTP template for reliable delivery; check your provider's dashboard. For local testing use `OTP_DEV=true`.


## Profile/UI update
- Player career is shown below the player photo/logo area.
- Player and team profiles have a top-right Share action.
- Results & Fixtures has Overall / Test / ODI / T20 format filters.
- Team Overview has Overall / Test / ODI / T20 plus a Year selector for year-wise player stats.
- Team profiles use a reference-style hero, logo, info cards, tabs and CRUD actions.
- Players use large background cards with Edit/Delete CRUD controls in Edit mode.

### Database migration
If you are using PostgreSQL/server mode, run `migration_team_profile.sql` once after the existing migrations. It adds the team profile fields used by the new team hero and CRUD form.


### Awards + Legendary Track Record migration
Run `migration_awards_player_track_record.sql` once on an existing PostgreSQL database after `migration_awards_fixtures.sql`. It links awards to player profiles and allows custom/special award types.
