/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
const fs = require('fs');

const engine = require('../src/main');

const filename = process.argv[2];
const template = fs.readFileSync(filename, 'utf-8');

const resource = {
    'world': 'Earth',
    'properties': {
        title: 'Hello, world.',
        fruits: ['Apple', 'Banana', 'Orange'],
        comma: ', '
    },
    'nav': {
        foo: 'This is foo. '
    },
    'it': {
        "html": "foo barty!",
        "title": "Hello, world!",
        "children": [
            "<div>A</div>",
            "<div>B</div>"
        ]
    }
};

const html = engine(resource, template);

console.log(html);