package net.ozgurlabweb.ozgurlabwebbackend.controller;

import jakarta.persistence.GeneratedValue;
import net.ozgurlabweb.ozgurlabwebbackend.exception.ResourceNotFoundException;
import net.ozgurlabweb.ozgurlabwebbackend.model.Laborant;
import net.ozgurlabweb.ozgurlabwebbackend.repository.LaborantRepository;
import org.aspectj.apache.bcel.Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/laborants")
public class LaborantController {
    @Autowired
    private LaborantRepository laborantRepository;


    @GetMapping
    public List<Laborant> getAllLaborants(){
        return laborantRepository.findAll();
    }

    // build create laborant REST API
    @PostMapping
    public Laborant createLaborant(@RequestBody Laborant laborant){
        return laborantRepository.save(laborant);
    }

    // build get laborant by id REST API
    @GetMapping({"{id}"})
    public ResponseEntity<Laborant> getLaborantById(@PathVariable long id){
        Laborant laborant = laborantRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("There is no laborant with that id: "+id));
        return ResponseEntity.ok(laborant);
    }

    // build update laborant REST API
    @PutMapping("{id}")
    public ResponseEntity<Laborant> updateLaborant(@PathVariable long id, @RequestBody Laborant laborantDetails){
        Laborant updateLaborant = laborantRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("There is no laborant with that id: "+id));

        updateLaborant.setLaborantName(laborantDetails.getLaborantName());
        updateLaborant.setLaborantSurname(laborantDetails.getLaborantSurname());

        laborantRepository.save(updateLaborant);

        return ResponseEntity.ok(updateLaborant);
    }

    // build delete laborant REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable long id){
        Laborant laborant = laborantRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("There is no laborant with that id: "+id));

        laborantRepository.delete(laborant);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
