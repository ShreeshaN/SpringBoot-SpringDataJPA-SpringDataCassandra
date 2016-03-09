package com.utils.config;

import java.io.Serializable;
import java.util.List;
import java.util.Map;
import javax.persistence.NoResultException;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 *
 * Generic repository implemented extending the spring
 * {@link PagingAndSortingRepository} class.
 * This repository can be extended by any of the child repository or can
 * be composed into implementation classes as well. All the methods
 * here are parameterized and make sure you set the right parameter
 * types.
 * 
 * @param <T>
 * @param <ID>
 */
@NoRepositoryBean
public interface GenericRepository<T, ID extends Serializable> extends PagingAndSortingRepository<T, ID> {

	/**
	 * Executes JPA named query
	 * 
	 * @param name
	 *            name of the JPA query
	 * @return {@link List<T>}
	 */
	public List<T> findByNamedQuery( String name );

	/**
	 * Executes JPA named query with arguments
	 * 
	 * @param name
	 *            name of the JPA query
	 * @return {@link List<T>}
	 */

	public List<T> findByNamedQueryAndParams( String name, Map<String, Object> params );

	/**
	 * Executes JPA named query
	 * 
	 * @param name
	 *            name of the JPA query
	 * @throws NoResultException
	 *             in case the entity not found
	 * @return T
	 */
	public T findOneByNamedQuery( String name );

	/**
	 * Executes JPA named query with arguments
	 * 
	 * @param name
	 *            name of the JPA query
	 * @param params
	 *            key value pair parameters
	 * @throws NoResultException
	 *             in case the entity not found
	 * @return T
	 */
	public T findOneByNamedQueryAndParams( String name, Map<String, Object> params );

	/**
	 * Executes JPA named native query
	 * 
	 * @param name
	 *            name of the JPA query
	 * @throws NoResultException
	 *             in case the entity not found
	 * @return T
	 */
	public T findOneByNativeQuery( String query );

	/**
	 * Executes JPA named native query with arguments
	 * 
	 * @param name
	 *            name of the JPA query
	 * @param params
	 *            key value pair parameters
	 * @throws NoResultException
	 *             in case the entity not found
	 * @return T
	 */
	public T findOneByNativeQueryAndParams( String query, Map<String, Object> params );

	/**
	 * Executes native query with arguments
	 * 
	 * @param query
	 *            Actual native Query
	 * @return {@link List<T>}
	 */
	public List<T> findByNativeQuery( String query );

	/**
	 * Executes JPA named native query with arguments
	 * 
	 * @param query
	 *            Actual native Query
	 * @param params
	 *            key value pairs parameter list
	 * @return {@link List<T>}
	 */
	public List<T> findByNativeQueryAndParams( String query, Map<String, Object> params );
}
