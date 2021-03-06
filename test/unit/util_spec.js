/* -*- Mode: Java; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- */
/* vim: set shiftwidth=2 tabstop=2 autoindent cindent expandtab: */

'use strict';

describe('util', function() {

  describe('combineUrl', function() {
    it('absolute url with protocol stays as is', function() {
      var baseUrl = 'http://server/index.html';
      var url = 'http://server2/test2.html';
      var result = combineUrl(baseUrl, url);
      var expected = 'http://server2/test2.html';
      expect(result).toEqual(expected);
    });

    it('absolute url without protocol uses prefix from base', function() {
      var baseUrl = 'http://server/index.html';
      var url = '/test2.html';
      var result = combineUrl(baseUrl, url);
      var expected = 'http://server/test2.html';
      expect(result).toEqual(expected);
    });

    it('combines relative url with base', function() {
      var baseUrl = 'http://server/index.html';
      var url = 'test2.html';
      var result = combineUrl(baseUrl, url);
      var expected = 'http://server/test2.html';
      expect(result).toEqual(expected);
    });

    it('combines relative url (w/hash) with base', function() {
      var baseUrl = 'http://server/index.html#!/test';
      var url = 'test2.html';
      var result = combineUrl(baseUrl, url);
      var expected = 'http://server/test2.html';
      expect(result).toEqual(expected);
    });

    it('combines relative url (w/query) with base', function() {
      var baseUrl = 'http://server/index.html?search=/test';
      var url = 'test2.html';
      var result = combineUrl(baseUrl, url);
      var expected = 'http://server/test2.html';
      expect(result).toEqual(expected);
    });
  });

});

