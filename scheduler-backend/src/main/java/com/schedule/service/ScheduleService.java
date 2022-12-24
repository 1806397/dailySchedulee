package com.schedule.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import com.schedule.repository.ScheduleRepository;
import com.schedule.model.Schedule;
@Service
public class ScheduleService {
@Autowired
private ScheduleRepository scheduleRepository;

public List<Schedule> findAll(){
	return scheduleRepository.findAll();
}
public void add(Schedule schedule) {
	scheduleRepository.save(schedule);
}
public void delete(Long id) {
	scheduleRepository.deleteById(id);
}
public void addAll(List<Schedule> schedule) {
	scheduleRepository.saveAll(schedule);
}
}
