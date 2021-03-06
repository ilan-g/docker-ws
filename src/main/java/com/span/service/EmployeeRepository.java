package com.span.service;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import com.span.domain.Employee;

/**
 * User: Ilan
 * Date: 02/15/2015
 * this is one .. more comments...
 */
@RepositoryRestResource(collectionResourceRel = "employees", path = "employees")
public interface EmployeeRepository extends CrudRepository<Employee, Long> {

}
