package com.utils.config;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Map;
import javax.persistence.EntityManager;
import javax.persistence.Query;
import javax.persistence.TypedQuery;
import org.springframework.data.jpa.repository.support.SimpleJpaRepository;

public final class GenericRepositoryImpl<T, ID extends Serializable> extends SimpleJpaRepository<T, ID>
		implements GenericRepository<T, ID> {

	private final EntityManager em;
	private final Class<T> domainClass;
	
	


	public GenericRepositoryImpl( Class<T> domainClass, EntityManager entityManager )
	{
		super(domainClass, entityManager);
		this.em = entityManager;
		this.domainClass = domainClass;
	}

	@Override
	public List<T> findByNamedQuery( final String name )
	{
		validate(name);
		return this.em.createNamedQuery(name, domainClass).getResultList();

	}

	@Override
	public T findOneByNamedQuery( String name )
	{
		validate(name);
		return this.em.createNamedQuery(name, domainClass).getSingleResult();
	}

	@Override
	public List<T> findByNamedQueryAndParams( String name, Map<String, Object> params )
	{
		validate(name, params);
		final TypedQuery<T> query = this.em.createNamedQuery(name, domainClass);
		setParams(query, params);
		return query.getResultList();
	}

	@Override
	public T findOneByNamedQueryAndParams( String name, Map<String, Object> params )
	{
		validate(name, params);
		final TypedQuery<T> query = this.em.createNamedQuery(name, domainClass);
		setParams(query, params);
		return query.getSingleResult();
	}

	private void setParams( Query query, Map<String, Object> params )
	{
		params.forEach(( k, v ) -> query.setParameter(k, v));
	}

	@Override
	public T findOneByNativeQuery( String query )
	{
		validate(query);
		return domainClass.cast(this.em.createNativeQuery(query, domainClass).getSingleResult());
	}

	@Override
	public T findOneByNativeQueryAndParams( String query, Map<String, Object> params )
	{
		validate(query, params);
		final Query q = this.em.createNativeQuery(query, domainClass.getClass());
		setParams(q, params);
		return domainClass.cast(q.getSingleResult());
	}

	@Override
	public List<T> findByNativeQuery( String query )
	{
		validate(query);
		return castList(domainClass, this.em.createNativeQuery(query, domainClass).getResultList());
	}

	@Override
	public List<T> findByNativeQueryAndParams( String query, Map<String, Object> params )
	{
		validate(query, params);
		final Query q = this.em.createNativeQuery(query, domainClass);
		setParams(q, params);
		return castList(domainClass, q.getResultList());
	}

	/**
	 * Fixes casting issue for returning List<Class<?>> type
	 * 
	 * http://stackoverflow.com/questions/367626/how-do-i-fix-the-expression
	 * -of-type-list-needs-unchecked-conversion
	 * 
	 * @param clazz
	 * @param c
	 * @return
	 */
	private static <T> List<T> castList( Class<? extends T> clazz, Collection<?> c )
	{
		List<T> r = new ArrayList<T>(c.size());
		for( Object o : c )
			r.add(clazz.cast(o));
		return r;
	}

	private void validate( String text )
	{
		if( text == null || text.trim().isEmpty() )
		{
			throw new IllegalArgumentException("named/query is null or empty");
		}
	}

	private void validate( String name, Map<String, Object> params )
	{
		if( name == null || name.trim().isEmpty() || params == null || params.isEmpty() )
		{
			throw new IllegalArgumentException("params are null or empty");
		}
	}

}
