package swt2.kids_app.backend.swt2_app.business.facility;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class FacilityService {

    private final FacilityRepository facilityRepository;

    public FacilityService(FacilityRepository facilityRepository) {
        this.facilityRepository = facilityRepository;
    }

    @Transactional
    public void saveFacility(Facility facility) {
        facilityRepository.save(facility);
    }

    @Transactional
    public Facility getById(Long id) {
        return facilityRepository.findById(id).orElseThrow(()
                -> new EntityNotFoundException("Facility not Found for Id: "+id));
    }

    @Transactional
    public boolean existById(Long id) {
        return facilityRepository.existsById(id);
    }

}
