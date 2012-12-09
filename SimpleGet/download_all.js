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

var links = document.getElementsByTagName("a");

var linksStr = "[";

for (var i = 0; i < links.length; i++)
{
	// checks if is a malito
	if (links[i].href.match("^mailto"))
	{
		continue;
	}

	linksStr += '"' + links[i].href + '",';
}

if (linksStr.charAt(linksStr.length - 1) == ',')
{
	linksStr = linksStr.substring(0, linksStr.length - 1);
}

linksStr += "]";

var port = chrome.extension.connect();

port.postMessage({type: "setLinks", links: linksStr});

