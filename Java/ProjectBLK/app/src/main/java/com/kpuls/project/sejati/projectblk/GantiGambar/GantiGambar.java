package com.kpuls.project.sejati.projectblk.GantiGambar;

import android.support.v7.app.ActionBar;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.support.v7.widget.Toolbar;
import android.view.MenuItem;
import android.view.View;
import android.widget.ImageView;

import com.kpuls.project.sejati.projectblk.R;

public class GantiGambar extends AppCompatActivity {

    ImageView imgview;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_ganti_gambar);
        imgview= findViewById(R.id.img_view);
        setToolbar();
    }
    private void setToolbar() {
        Toolbar toolbar =  findViewById(R.id.toolbar);
        //setSupportActionBar(toolbar);
        final ActionBar ab = getSupportActionBar();
        ab.setDisplayHomeAsUpEnabled(true);
        ab.setTitle("Ganti Gambar");
    }
    @Override
    public boolean onOptionsItemSelected(MenuItem item) {

        switch (item.getItemId()){
            case android.R.id.home :
                finish();
                break;
        }

        return true;
    }

    public void gmbr1(View view) {
        imgview.setImageResource(R.drawable.winxp);
    }
    public void gmbr2(View view) {
        imgview.setImageResource(R.drawable.android);
    }
    public void gmbr3(View view) {
        imgview.setImageResource(R.drawable.logo2);
    }
    public void gmbr4(View view) {
        imgview.setImageResource(R.drawable.logo5);
    }
    public void gmbr5(View view) {
        imgview.setImageResource(R.drawable.wordpress);
    }
}
