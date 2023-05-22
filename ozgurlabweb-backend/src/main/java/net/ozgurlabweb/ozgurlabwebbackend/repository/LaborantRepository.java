package net.ozgurlabweb.ozgurlabwebbackend.repository;

import net.ozgurlabweb.ozgurlabwebbackend.model.Laborant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LaborantRepository extends JpaRepository<Laborant, Long> {
}
