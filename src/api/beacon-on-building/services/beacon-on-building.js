'use strict';

/**
 * beacon-on-building service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::beacon-on-building.beacon-on-building');
