package com.span.service;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import com.span.domain.Employee;

/**
 * User: Ilan
 * Date: 02/15/2015
 */
@RepositoryRestResource(collectionResourceRel = "name", path = "name")
public interface EmployeeRepository extends CrudRepository<Employee, Long> {

}
