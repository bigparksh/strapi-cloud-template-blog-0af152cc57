'use strict';

/**
 * beacon-log service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::beacon-log.beacon-log');
