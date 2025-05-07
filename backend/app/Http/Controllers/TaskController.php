<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;

class TaskController extends Controller
{
    //
    public function index(){

        return Task::all();
    }

    public function store(Request $request){

        $task=new Task();
        $task->title =$request->title;
        $task->address=$request->address;
        $task->save();

        return response()->json($task);
    }

    public function destroy($id){
        Task::destroy($id);
        return response()->json(['message'=>'deleted']);
    }

}
