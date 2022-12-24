package com.schedule.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.schedule.model.Schedule;
import com.schedule.service.ScheduleService;

@RestController
@RequestMapping("/schedule")
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class ScheduleController {
	@Autowired
	private ScheduleService scheduleService;
	@GetMapping
	public List<Schedule> list(){
		return scheduleService.findAll();
	}
	@PostMapping
	public void add(@RequestBody final Schedule schedule) {
		scheduleService.add(schedule);
	}
   @RequestMapping(value = "{id}",method = RequestMethod.DELETE)
   public void delete(@PathVariable Long id) {
	   scheduleService.delete(id);
   }
   @PostMapping
   @RequestMapping("/addAll")
   public void addAll(@RequestBody List<Schedule> schedules) {
	   scheduleService.addAll(schedules);
   }

}
