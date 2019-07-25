<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //group table
         Schema::create('group', function (Blueprint $table) {
            $table->bigIncrements('group_id');
            $table->unsignedInteger('member_id');
            $table->foreign('member_id')->references('member_id')->on('members')->onDelete('cascade');
            $table->string('group_name');
        });

        //members table
        Schema::create('members', function (Blueprint $table) {
            $table->bigIncrements('member_id');
            $table->unsignedInteger('group_id');
            $table->foreign('group_id')->references('group_id')->on('group')->onDelete('cascade');
            $table->string('members_name');
            $table->unsignedInteger('members_age');
        });
        
        //user_account table
        Schema::create('user_account', function (Blueprint $table) {
            $table->bigIncrements('user_id');
            $table->unsignedInteger('member_id');
            $table->foreign('member_id')->references('member_id')->on('members')->onDelete('cascade');
            $table->integer('group_id')->unsigned();
            $table->foreign('group_id')->references('group_id')->on('group')->onDelete('cascade');
            $table->string('email')->unique();
            $table->string('passward');
        });
        
        
        //section table
       Schema::create('section', function (Blueprint $table) {
            $table->bigIncrements('section_id');
            $table->unsignedInteger('group_id');
            $table->foreign('group_id')->references('group_id')->on('group')->onDelete('cascade');
            $table->string('title');
            $table->string('img');
            $table->string('description');
            $table->unsignedInteger('order');
        });
        //hp table
       Schema::create('hp', function (Blueprint $table) {
            $table->bigIncrements('hp_id');
            $table->unsignedInteger('group_id');
            $table->foreign('group_id')->references('group_id')->on('group')->onDelete('cascade');
            $table->string('title');
            $table->string('img_favicon');
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('group');
        Schema::dropIfExists('members');
        Schema::dropIfExists('user_account');
        Schema::dropIfExists('section');
        Schema::dropIfExists('hp');
    }
}
