sap.ui.define(function () {
	"use strict";

	return {
		name: "QUnit test suite for the UI5 Application: com.faircg.samplecicd",
		defaults: {
			page: "ui5://test-resources/com/faircg/samplecicd/Test.qunit.html?testsuite={suite}&test={name}",
			qunit: {
				version: 2
			},
			sinon: {
				version: 1
			},
			ui5: {
				language: "EN",
				theme: "sap_horizon"
			},
			coverage: {
				only: "com/faircg/samplecicd/",
				never: "test-resources/com/faircg/samplecicd/"
			},
			loader: {
				paths: {
					"com/faircg/samplecicd": "../"
				}
			}
		},
		tests: {
			"unit/unitTests": {
				title: "Unit tests for com.faircg.samplecicd"
			},
			"integration/opaTests": {
				title: "Integration tests for com.faircg.samplecicd"
			}
		}
	};
});
