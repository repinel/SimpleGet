// Copyright 2011 Roque Pinel.
//
// This file is part of Simple Get Plugin.
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

#include <string>
#include <cstdlib>
#include "simpleGetPlugin.h"

#ifdef OS_WINDOWS
#include <windows.h>
#endif

#define MSG_OK ""
#define MSG_NO_COMMAND_PROCESSOR "the sytem does not support command invocation"
#define MSG_INVALID_COMMAND "invalid command"

std::string SimpleGetPlugin::callApplication(std::string application, std::string parameters)
{
//	if (system(NULL) == 0)
//		return MSG_NO_COMMAND_PROCESSOR;

//	if (system(cmd.c_str()) != 0)
//		return MSG_INVALID_COMMAND;

#ifdef OS_WINDOWS
	STARTUPINFO StartInfo; // name structure
	PROCESS_INFORMATION ProcInfo; // name structure
	memset(&ProcInfo, 0, sizeof(ProcInfo)); // Set up memory block
	memset(&StartInfo, 0 , sizeof(StartInfo)); // Set up memory block
	StartInfo.cb = sizeof(StartInfo); // Set structure size
	parameters = " " + parameters;
	CreateProcess((char *) application.c_str(), (char *) parameters.c_str(), NULL, NULL, NULL, NULL, NULL, NULL, &StartInfo, &ProcInfo);
#endif

#if defined OS_LINUX || defined OS_MACOSX
	system((application + " " + parameters + " &").c_str());
#endif

	return MSG_OK;
}

