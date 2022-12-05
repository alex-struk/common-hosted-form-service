exports.up = function(knex) {
  return Promise.resolve()
    .then(() => knex.schema.alterTable('user', table => {
      table.string('idpUserId').comment('The unique identifier provided by the identity provider');
      table.string('idpUsername').comment('The username provided by the identity provider');
    }));
};

exports.down = function(knex) {
  return Promise.resolve()
    .then(() => knex.schema.alterTable('user', table => {
      table.dropColumn('idpUserId');
      table.dropColumn('idpUsername');
    }));
};
