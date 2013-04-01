// Copyright 2009 Google Inc.
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

#ifndef _NIXYSA_EXAMPLES_SIMPLE_COMPLEX_H_
#define _NIXYSA_EXAMPLES_SIMPLE_COMPLEX_H_

#include <math.h>

class Complex {
 public:
  Complex() : real_(0.f), imaginary_(0.f) { }
  Complex(float real, float imaginary) : real_(real), imaginary_(imaginary) {}

  float real() const { return real_; }
  void set_real(float value) { real_ = value; }

  float imaginary() const { return imaginary_; }
  void set_imaginary(float value) { imaginary_ = value; }

  float norm2() const { return real_*real_ + imaginary_*imaginary_; }
  float norm() const { return sqrtf(norm2()); }

  Complex add(const Complex &other) {
    return Complex(real_ + other.real_, imaginary_ + other.imaginary_);
  }

  Complex mul(const Complex &other) {
    return Complex(real_ * other.real_ - imaginary_ * other.imaginary_,
                   real_ * other.imaginary_ + imaginary_ * other.real_);
  }

 private:
  float real_;
  float imaginary_;
};

#endif  // _NIXYSA_EXAMPLES_SIMPLE_COMPLEX_H_
