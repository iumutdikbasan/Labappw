package net.ozgurlabweb.ozgurlabwebbackend;

import net.ozgurlabweb.ozgurlabwebbackend.model.Laborant;
import net.ozgurlabweb.ozgurlabwebbackend.repository.LaborantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class OzgurlabwebBackendApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(OzgurlabwebBackendApplication.class, args);
	}

	@Autowired
	private LaborantRepository laborantRepository;
	@Override
	public void run(String... args) throws Exception {
	//	Laborant laborant = new Laborant();
	// 	laborant.setLaborantName("Umut");
	//	laborant.setLaborantSurname("Dikbasan");
	//laborantRepository.save(laborant);

	//Laborant laborant1 = new Laborant();
	//	laborant1.setLaborantName("İbrahim");
	//laborant1.setLaborantSurname("Dikbasan");
	//laborantRepository.save(laborant1);
	}
}
