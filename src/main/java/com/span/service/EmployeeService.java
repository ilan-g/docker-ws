/*
 * Copyright 2012-2013 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.span.service;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.span.EmployeeApplication;
import com.span.domain.Employee;

import java.util.Iterator;

@Component
public class EmployeeService {


    @Autowired
    private EmployeeRepository employeeRepository;
    
    private static Log logger = LogFactory.getLog(EmployeeApplication.class);

    private String DEFUALT_NAME = "...No entries...so far..";

    /**
     * Added new comments. add new comments. 
     * @return
     */
    public String getEmployeeList() {
        Iterator<Employee> names = employeeRepository.findAll().iterator();
        logger.info("getting inside employe list");
        String name = DEFUALT_NAME;
        while(names.hasNext()){
            name = names.next().getName();
        }
        return "Hello " + name;
    }

}
