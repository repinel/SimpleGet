// Copyright 2011 Roque Pinel.
//
// This file is part of Simple Get.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// global options
var options = [["downloadManagerPath", "download_manager_path", "/usr/bin/wget"],
	["downloadManagerParameters", "download_manager_parameters", "[SG_URL] -P [SG_DESTINATION]"],
	["downloadDestination", "download_destination", "/home/user/downloads"]];

// Set the default options when installed
function set_first_time()
{
	for (var i = 0; i < options.length; i++)
	{
		if (!localStorage[options[i][1]])
		{
			localStorage[options[i][1]] = options[i][2];

			console.log(options[i][0] + " initial value : " + options[i][2]);
		}
	}
}

// Restore to defaults.
function default_options()
{
	for (var i = 0; i < options.length; i++)
	{
		document.getElementById(options[i][0]).value = options[i][2];

		localStorage[options[i][1]] = options[i][2];

		console.log(options[i][0] + " restored: " + options[i][2]);
	}

	// Update status to let user know options were saved.
	var status = document.getElementById("status");

	status.innerHTML = "Options Restored to Defaults";

	setTimeout(function() {
		status.innerHTML = "";
	}, 900);
}

// Saves options to localStorage.
function save_options()
{
	for (var i = 0; i < options.length; i++)
	{
		var value = document.getElementById(options[i][0]).value;

		localStorage[options[i][1]] = value;

		console.log(options[i][0] + " stored: " + value);
	}

	// Update status to let user know options were saved.
	var status = document.getElementById("status");

	status.innerHTML = "Options Saved";

	setTimeout(function() {
		status.innerHTML = "";
	}, 900);
}

// Restores select box state to saved value from localStorage.
function restore_options()
{
	for (var i = 0; i < options.length; i++)
	{
		var value = localStorage[options[i][1]];

		if (!value)
		{
			// first time, using default.
			value = options[i][2];
		}

		var item = document.getElementById(options[i][0]);

		item.value = value;

		console.log(options[i][0] + " loaded: " + value);
	}
}

