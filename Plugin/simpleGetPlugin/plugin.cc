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

#include <npapi.h>

extern "C" {
  const char *NP_GetMIMEDescription(void) {
    return "application/x-simplegetplugin::Connects the Simple Get extesion to the download managers";
  }

  NPError NP_GetValue(NPP instance, NPPVariable variable, void *value) {
    switch (variable) {
      case NPPVpluginNameString:
        *static_cast<const char **>(value) = "Simple Get Plugin";
        break;
      case NPPVpluginDescriptionString:
        *static_cast<const char **>(value) = "Connects the Simple Get extesion to the download managers";
        break;
      default:
        return NPERR_INVALID_PARAM;
        break;
    }
    return NPERR_NO_ERROR;
  }
}

