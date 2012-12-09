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

var links = [];

function list_links()
{
	var port = chrome.extension.connect();

	port.postMessage({type: "getLinks"});

	port.onMessage.addListener(
		function getResp(response)
		{

			if (response.links)
			{
				links = JSON.parse(response.links);

				var linksTable = document.getElementById('linksTable');

				var index = linksTable.rows.length;

				for (var i = 0; i < links.length; i++)
				{
					var row = linksTable.insertRow(index++);

					var cell1 = row.insertCell(0);

					cell1.innerHTML = '<input type="checkbox" name="links" value="'
										+ i + '" checked="checked"/>';

					var cell2 = row.insertCell(1);

					cell2.innerHTML = '<a href="' + links[i] + '">'
										+ links[i] + '</a>';
				}
			}
		}
	);
}

function select_all(item)
{
	var checks = document.getElementsByName('links');

	for (var i = 0; i < checks.length; i++)
	{
		checks[i].checked = item.checked;
	}
}

function eval_extensions(option)
{
	var extensionsStr = document.getElementById('extensions').value;

	var extensions = extensionsStr.replace(' ', '').split(',');

	var checks = document.getElementsByName('links');

	for (var i = 0; i < checks.length; i++)
	{
		for (var j = 0; j < extensions.length; j++)
		{
			if (extensions[j] != "" && links[i].match(extensions[j] + "$"))
			{
				if (option == "check")
				{
					checks[i].checked = true;
				}
				else
				{
					checks[i].checked = false;
				}

				break;
			}
		}
	}
}

function download_all()
{
	var checks = document.getElementsByName('links');

	var linksStr = "[";

	for (var i = 0; i < checks.length; i++)
	{
		if (checks[i].checked)
		{
			linksStr += '"' + links[i] + '",';
		}
	}

	if (linksStr.charAt(linksStr.length - 1) == ',')
	{
		linksStr = linksStr.substring(0, linksStr.length - 1);
	}

	linksStr += "]";

	var port = chrome.extension.connect();

	port.postMessage({"type": "downloadLinks", "links": linksStr});

	// closing pop-up
	self.close();
}

